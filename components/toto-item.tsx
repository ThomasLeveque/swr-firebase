import React from 'react';
import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

import { Toto } from '@data-types/toto.types';
import { Document } from '@libs/firebase.types';

type TotoItemProps = {
  toto: Document<Toto>;
};

const TotoItem: React.FC<TotoItemProps> = ({ toto: { id, name, value } }) => {
  return (
    <Link href={`/${id}`} passHref>
      <ChakraLink display="block">
        {name} = {value}
      </ChakraLink>
    </Link>
  );
};

export default TotoItem;
