import { GithubRepository, GitHubUser } from "types";

export interface SearchUserProps {
   setGithubUsers: (githubUser: GitHubUser[]) => void;
}

export interface UserListProps {
   githubUsers: GitHubUser[];
   setRepositories: (repos: GithubRepository[] ) => void,
   repositories: GithubRepository[]
}

export interface RepositoryListProps {
    repositories: GithubRepository[];
}