import { Container, Title } from "@mantine/core";
import { UserList, UserSearch } from "components";
import { useState } from "react";
import { GitHubUser } from "types";

const Home = () => {
    const [githubUsers, setGithubUsers] = useState<GitHubUser[]>([]);
    const [repositories, setRepositories] = useState<any[]>([]);

    return (
        <>
            <Container maw={400}>
                <Title style={{ textAlign: "center" }} order={2} mb="md">GitHub User Search</Title>
                <UserSearch setGithubUsers={setGithubUsers} />
            </Container>
            <Container maw={400}>
                <UserList githubUsers={githubUsers} setRepositories={setRepositories} repositories={repositories} /> 
            </Container>           
        </>
    )
}

export default Home