import React from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/core';
import DashboarShell from './DashboardShell';

const FreePlaneEmptyState = () => (
  <DashboarShell>
    <Box width="100%" borderRadius="8px" backgroundColor="white" p={8}>
      <Heading size="md">Get feedback on your site instantly. </Heading>
      <Text>Start today, then grow with is..</Text>
      <Button>Upgrade to Starter</Button>
    </Box>
  </DashboarShell>
);

export default FreePlaneEmptyState;
