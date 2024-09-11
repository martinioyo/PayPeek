// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

type IconName = ComponentProps<typeof Ionicons>['name'] | ComponentProps<typeof FontAwesome5>['name'];

export function TabBarIcon({ style, name, ...rest }: IconProps<IconName> & { name: IconName }) {
  if (typeof name === 'string' && name.includes('file-invoice-dollar')) {
    return <FontAwesome5 name={name} size={24} style={[{ marginBottom: -3 }, style]} {...rest} />;
  }
  return <Ionicons name={name} size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}