import React from 'react';

type StyleProps = {
    styles: React.CSSProperties
}

export const Container = ({styles}: StyleProps) => {
  return (
    <div style={styles}>
       Text Goes here...
    </div>
  )
}

