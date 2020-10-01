import { Button, Box, Flex, Icon, Stack, Text, Link } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';
import Head from 'next/head';

export default function Home() {
  const auth = useAuth();
  return (
    <Box bg="gray.100" py={16}>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
        maxW="700px"
        margin="0 auto"
      >
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `
            }}
          />
          <title>Fast Feedback</title>
        </Head>

        <Icon name="logo" color="black" size="64px" />
        <Text mb={4} fontSize="lg" py={8} px={4}>
          <Text as="span" fontWeight="bold" display="inline">
            Fast Feedback
          </Text>
          {' is being built as part of '}
          <Link
            href="https://react2025.com"
            isExternal
            textDecoration="underline"
          >
            React 2025
          </Link>
          {`. It's the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by leaving a comment below.`}
        </Text>
        {auth.user ? (
          <Button
            as="a"
            href="/dashboard"
            backgroundColor="gray.900"
            color="white"
            fontWeight="medium"
            mt={4}
            maxW="200px"
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
          >
            View Dashboard
          </Button>
        ) : (
          <Stack>
            <Button
              leftIcon="github"
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              mt={4}
              size="lg"
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
              onClick={(e) => auth.signinWithGitHub()}
            >
              Sign in with GitHub
            </Button>
            <Button
              leftIcon="google"
              backgroundColor="white"
              variant="outline"
              color="gray.900"
              fontWeight="medium"
              mt={4}
              size="lg"
              _hover={{ bg: 'gray.100' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
              onClick={(e) => auth.signinWithGoogle()}
            >
              Sign in with Google
            </Button>
          </Stack>
        )}
      </Flex>
    </Box>
  );
}
