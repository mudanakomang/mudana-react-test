import { Octokit } from "octokit";

// Initialize octokit
export const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN // My GitHub personal token
});