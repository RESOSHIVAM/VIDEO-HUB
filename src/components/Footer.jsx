import {
  Box,
  Heading,
  VStack,
  Stack,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <div>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={["center","left"]}>
              Subscribe to get updates
            </Heading>
            <HStack borderBottom={'2px solid white'} py={2}>
              <Input
                placeholder="Enter Email Here...."
                border={'none'}
                borderRadius="none"
                outline={'none'}
                focusBorderColor="none"
              />
              <Button
                p={'0'}
                variant={'ghost'}
                colorScheme="purple"
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={20} />
              </Button>
            </HStack>
          </VStack>

          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              {' '}
              Video Hub
            </Heading>
            <Text>All rights reserved</Text>
          </VStack>
          <VStack w={'full'}>
            <Heading>Social Media</Heading>
            <Button variant={'link'} colorScheme={'white'}>
              <a target={"blank"} href="https://www.linkedin.com/in/resoshivam/">Linkedin</a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
              <a target={"blank"} href="https://github.com/RESOSHIVAM">GitHub</a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
              <a target={"blank"} href="https://www.youtube.com/channel/UCWYAis_sNgEOfE9bcyh87nw">YouTube</a>
            </Button>

          </VStack>
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
