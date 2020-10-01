import React from 'react';
import { Heading, Text, Button, Flex } from '@chakra-ui/core';

import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <Flex
    width="100%"
    borderRadius="8px"
    backgroundColor="white"
    p={8}
    direction="column"
    justify="center"
    align="center"
  >
    <Heading size="lg" mb={2}>
      You haven't add any sites
    </Heading>
    <Text mb={4}>{`Welcome Lest's get Started. `}</Text>
    <AddSiteModal>Add Your First Site</AddSiteModal>
  </Flex>
);

export default EmptyState;
