import React from 'react';
import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

type TotoItemProps = {
  id: string;
  name: string;
  value: number;
};

const TotoItem: React.FC<TotoItemProps> = ({ id, name, value }) => {
  return (
    <Link href={`/${id}`} passHref>
      <ChakraLink display="block">
        {name} = {value}
      </ChakraLink>
    </Link>
  );
};

export default TotoItem;
