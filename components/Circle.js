import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export const CircularProgress = ({ size, strokeWidth, percentage,color,textstyle,stroke }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage * circumference) / 100;

  return (
    <>
      <Svg height={size} width={size}>
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={stroke}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress}, ${circumference}`}
          strokeLinecap="round"
        />
      </Svg>
      <Text style={textstyle}>{`${percentage}%`}</Text>
      </>
  );
};

