import React from 'react';
import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

const TotoItem = ({ id, name, value }) => {
  return (
    <Link href={`/${id}`} passHref>
      <ChakraLink display="block">
        {name} = {value}
      </ChakraLink>
    </Link>
  );
};

export default TotoItem;
