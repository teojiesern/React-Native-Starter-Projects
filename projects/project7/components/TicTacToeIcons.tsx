import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/Entypo';

type stateType = 'circle' | 'cross' | 'empty';

type iconProps = PropsWithChildren<{
  name: stateType;
}>;

export default function TicTacToeIcons({name}: iconProps) {
  if (name === 'circle') return <Icon name="circle" size={30} color="white" />;
  if (name === 'cross') return <Icon name="cross" size={30} color="white" />;
  return <Icon name="pencil" size={30} color="white" />;
}

