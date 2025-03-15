import { Button, CloseButton, Text, TextInput } from '@mantine/core';
import { FC, useState } from 'react';
import { GitHubUser } from 'types';
import { octokit } from 'utils';
import { SearchUserProps } from 'props';

const UserSearch: FC<SearchUserProps> = ({ setGithubUsers }) => {
  const [searchUser, setSearchUser] = useState('');
  const [githubUsersFound, setGithubUsersFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Search GitHub users handler (max 5 search results)
  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state
      // Make API request to fetch users with octokit
      const response = await octokit.request('GET /search/users', {
        q: searchUser,
        per_page: 5,
      });

      const { data } = response;
      const githubUsers: GitHubUser[] = data.items.map((githubUser: GitHubUser) => ({
        id: githubUser.id,
        login: githubUser.login,
        avatar_url: githubUser.avatar_url,
        html_url: githubUser.html_url,
      }));

      setGithubUsers(githubUsers);
      setGithubUsersFound(githubUsers.length > 0); // Set users found state
    } catch (error) {
      console.error('Error fetching users:', error);
      setGithubUsersFound(false);
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(event.target.value);
    setGithubUsersFound(false);
    setGithubUsers([]); // Reset users list
  };

  // Clear search input
  const handleClearSearch = () => {
    setSearchUser('');
    setGithubUsersFound(false);
    setGithubUsers([]);
  };

  return (
    <>
      <TextInput
        placeholder="Enter username"
        value={searchUser}
        onChange={handleInputChange}
        mb="sm"
        rightSection={
          searchUser && (
            <CloseButton
              size="sm"
              variant="transparent"
              onClick={handleClearSearch} // Clears the input field
            />
          )
        }
        onKeyDown={(event) => event.key === 'Enter' && searchUser !== '' && handleSearch()}
      />
      <Button
        loading={loading}
        loaderProps={{ type: 'dots', size: 'lg' }}
        size="lg"
        fullWidth
        onClick={handleSearch}
        disabled={searchUser === ''}
      >
        Search
      </Button>
      {githubUsersFound && (
        <Text style={{ textAlign: 'left' }} py={10} c="dimmed">
          Showing users for "{searchUser}"
        </Text>
      )}
    </>
  );
};

export default UserSearch;
