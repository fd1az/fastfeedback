import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import useSWR, { mutate } from 'swr';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  useToast
} from '@chakra-ui/core';
import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const AddSiteModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { user } = useAuth();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const { handleSubmit, register } = useForm();

  const onSubmit = ({ name, url }) => {
    const newSite = {
      author: user.name,
      authorId: user.uid,
      createdAt: new Date().toISOString(),
      name,
      url
    };
    const { id } = createSite(newSite);
    toast({
      title: 'Account created.',
      description: "We've created your sites.",
      status: 'success',
      duration: 5000,
      isClosable: true
    });
    mutate(
      ['/api/sites', user.token],
      async (data) => ({ sites: [...data.sites, { id, ...newSite }] }),
      false
    );
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
      >
        {children}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader fontWeight="bold">Add site</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="My Site"
                name="name"
                ref={register({
                  required: 'Required'
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                name="url"
                ref={register({
                  required: 'Required'
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              backgroundColor="#99fffe"
              color="#194D4C"
              ml={3}
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
