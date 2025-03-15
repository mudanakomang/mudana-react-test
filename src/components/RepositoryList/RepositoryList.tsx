import React, { FC } from 'react';
import { Card, Group, Text } from '@mantine/core';
import { RepositoryListProps } from 'props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RepositoryList: FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <>
      {repositories.length === 0 ? (
        <Text style={{ textAlign: "center" }} c="dimmed">
          No repositories found.
        </Text>
      ) : (
        repositories.map((repo) => (
          <Card key={repo.id} shadow="sm" padding="lg" mb="md" bg={'gray.1'}>
            <Group justify="space-between" maw={'100vw'}>
              <Text
                style={{
                  width: "70%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                fw={500}
              >
                {repo.name}
              </Text>
              <Text>{repo.stargazers_count} <FontAwesomeIcon icon={faStar} /> </Text>
            </Group>
            <Text pt={"xs"} size="sm" c="dimmed" maw={'90%'}>
              {repo.description || "No description available"}
            </Text>
          </Card>
        ))
      )}
    </>
  );
};

export default RepositoryList;
