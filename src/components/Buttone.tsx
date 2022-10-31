import {Button} from 'native-base';
import React from 'react';

interface Props {
  mt?: string | number;
  bg?: string;
  color?: string;
  children?: React.ReactNode;
  onPress: () => void | undefined;
}

const Buttone = ({mt, bg, color, children, onPress}: Props) => {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{
        color,
        fontWeight: 'bold',
      }}
      _pressed={{bg}}
      onPress={() => onPress()}>
      {children}
    </Button>
  );
};

export default Buttone;
