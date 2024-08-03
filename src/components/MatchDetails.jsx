import React, { useEffect, useState } from 'react';
import { Card, Group, Text, Badge, Textarea, Button } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { client2 } from "../api/client";

const MatchDetails = ({ postMatch }) => {
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const response = await client2.get(`/matches/${id}`);
        const matchData = response.data;
        setMatch(matchData);

        if (matchData.matchStatus) {
          navigate('/main');
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch match details", error);
        navigate('/main');
      }
    };

    fetchMatch();
  }, [id, navigate]);

  const applyMatch = async (event) => {
    event.preventDefault();

    try {
      console.log(match);
      await postMatch(match.id);
    } catch (error) {
      console.error("Apply match failed", error);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!match) {
    return <Text>Match details not found.</Text>;
  }

  return (
    <form
      onSubmit={applyMatch}
      style={{
        width: 480,
        margin: "auto",
        marginTop: 100
      }}
    >
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="md">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Group>
            <Text fw={500} size="lg">
              {match.title}
            </Text>
            <Badge color="green" variant="light">
              {match.region}
            </Badge>
          </Group>
        </div>
        <Textarea
          value={match.content}
          readOnly
          minRows={3}
          maxRows={6}
          autosize
          style={{ marginTop: '20px', marginBottom: '20px' }}
        />
        <Group position="apart" style={{ marginTop: '20px' }}>
          <Text size="md">
            장소: {match.location}
          </Text>
          <div style={{ textAlign: 'right', marginLeft: 'auto' }}>
            <Text size="sm" color="dimmed">경기 날짜</Text>
            <Text size="sm" color="dimmed">
              {new Date(match.matchDate).toLocaleString()}  
            </Text>
          </div>
        </Group>
        <Button
          variant="outline"
          color="green"
          type="submit"
          fullWidth
          mt="md"
          style={{ marginBottom: '20px' }}
          disabled={match.matchStatus}
        >
          신청하기
        </Button>
      </Card>
    </form>
  );
};

export default MatchDetails;