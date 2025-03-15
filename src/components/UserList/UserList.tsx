import React, { FC, useEffect, useState } from "react";
import { Accordion, Loader, ScrollArea, Text } from "@mantine/core";
import { RepositoryList } from "components/RepositoryList";
import { UserListProps } from "props";
import { octokit } from "utils";

const UserList: FC<UserListProps> = ({
  githubUsers,
  setRepositories,
  repositories,
}) => {
  const [loadingUser, setLoadingUser] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Load user repositories when user is selected
  const loadUserRepositories = async (username: string) => {
    try {
        setRepositories([]); // Reset repositories list
        setLoadingUser(username); // Set loading state for selected user
        // Make API request to fetch user repositories with octokit
        const response = await octokit.request(`GET /users/${username}/repos`);
        const { data } = response;
        setRepositories(data);
    } catch (error) {
        console.log(error);
    } finally {
        setLoadingUser(null);
    }
  };

  useEffect(() => {
    setActiveItem(null); // Reset active repository list when user list changes
  }, [githubUsers]);

  return (
    <Accordion variant="separated" transitionDuration={300} onChange={setActiveItem} value={activeItem}>
      {githubUsers.map((user) => (
        <Accordion.Item key={user.id} value={user.login}>
          <Accordion.Control onClick={() => loadUserRepositories(user.login)}>
          {user.login} {loadingUser === user.login && activeItem === user.login && <Loader size="sm" px={20} color="blue" />}
          </Accordion.Control>          
          <Accordion.Panel>
            {/* Make area scrollable */}
            {loadingUser ? null : repositories.length > 0 ? (
                <ScrollArea h={300} type="scroll"style={{ overflowX: 'hidden' }} >
                    <RepositoryList repositories={repositories} />
                </ScrollArea>
            ) : (
                <Text c={"dimmed"}>No Repositories found</Text>
            )}
            </Accordion.Panel>

        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default UserList;
