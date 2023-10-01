import React from 'react';
import { Container, Disposition } from './styles';

interface SkeletonProps {
  height?: string;
  width?: string;
  repeat?: number;
  lowGap?: boolean;
  horizontal?: boolean;
}

export const Skeleton = ({height, width, repeat, lowGap, horizontal }: SkeletonProps) => {
  const components = [];

  for (let i = 0; i < (repeat ? repeat : 1); i++) {
    components.push(
      React.Children.toArray(
        <Container $height={height} $width={width} $lowGap={lowGap} />
      )
    );
  }

  return <Disposition $horizontal={horizontal} $lowGap={lowGap}>{components}</Disposition>;
};
