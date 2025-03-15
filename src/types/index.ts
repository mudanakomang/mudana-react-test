export interface GitHubUser {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
}

export interface GithubRepository {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number;
}
