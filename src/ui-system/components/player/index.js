import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.div`
  background-color: ${p => p.bgColor};
`

const Iframe = styled.iframe`
  mix-blend-mode: luminosity;
`

const Player = ({bgColor = 'var(--bodyBg)', album}) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Iframe
        title="bandcamp"
        style={{border: 0, width: '100%', height: 120}}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${album}/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/transparent=true/`}
        seamless
      />
    </Wrapper>
  )
}

export default Player