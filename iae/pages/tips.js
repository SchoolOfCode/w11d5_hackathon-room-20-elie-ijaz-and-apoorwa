import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { useTheme, Text } from '@nextui-org/react';
import styles from "../styles/Home.module.css";


function Tips() {
    const { theme } = useTheme();
  return ( 
    <NextUIProvider>
    <div className={styles.main}>
    
    
        <p
        style={{
          color: theme.colors.primary.value,
          fontSize: theme.fontSizes.tiny.value,
          padding: `${theme.space[2].value} ${theme.space[4].value}`
        }}
      >
        Using color theme value
      </p>

      <Text
        css={{
          color: '$blue800',
          fontSize: '$tiny',
          padding: '$2 $4'
        }}
      >
        Using tokens
      </Text>
      </div>
    </NextUIProvider>

  )
}

export default Tips;
