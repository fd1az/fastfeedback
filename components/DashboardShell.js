import React from 'react';
import NexLink from 'next/link';
import {
  Flex,
  Icon,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button
} from '@chakra-ui/core';
import { useAuth } from '@/lib/auth';
import AddSiteModal from './AddSiteModal';

const DashboarShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="white"
        py={4}
        px={8}
      >
        <Stack isInline spacing={4} align="center">
          <Icon name="logo" color="black" size="32px" />
          <NexLink href="/dashboard" passHref>
            <Link mr={4}>Sites</Link>
          </NexLink>
          <NexLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NexLink>
        </Stack>
        <Flex align="center">
          {user && (
            <Button variant="ghost" mr={2} onClick={() => signout()}>
              Log Out
            </Button>
          )}
          <Avatar size="sm" src={user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex
        flexDirection="row"
        h="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        p={8}
      >
        <Flex w="100%" maxWidth="800px" ml="auto" mr="auto" direction="column">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboarShell;
