import {
  Avatar,
  AvatarProps,
  Button,
  Col,
  CSS,
  Grid,
  GridItemProps,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react'
import React from 'react'
import LoadingSpinner from '../atoms/LoadingSpinner'
import useContent from '../features/content/useContent'

export type UserTwitterCardProps = {
  avatarUrl: string
  avatarProps?: AvatarProps
  css?: CSS
  onClick?: string
} & Partial<GridItemProps>

export function UserTwitterCard({
  avatarProps,
  css,
  onClick,
  ...props
}: Partial<UserTwitterCardProps>) {
  const [following, setFollowing] = React.useState(false)
  const { data } = useContent()

  if (!data) return <LoadingSpinner />

  return (
    <Grid.Container
      className='user-twitter-card__container'
      css={{
        mw: '250px',
        borderRadius: '$lg',
        padding: '$sm',
        ...css,
      }}
      onClick={onClick}
      {...props}
    >
      <Row
        justify='space-between'
        align='center'
      >
        <Col span={3}>
          <Avatar
            size='lg'
            src={data?.constants.urls.profilePicUrl}
            color='gradient'
            bordered
            squared
            {...avatarProps}
          />
        </Col>
        <Col span={9}>
          <Row>
            <Grid
              xs={12}
              direction='column'
            >
              <Text
                className='user-twitter-card__text'
                b
                size={15}
              >
                Oskar Hulter
              </Text>
              <Text
                className='user-twitter-card__text'
                size={14}
                css={{ mt: '-$3' }}
                color='#888888'
              >
                @OHulter
              </Text>
            </Grid>
            <Button
              auto
              rounded
              onClick={() => setFollowing(!following)}
              css={{
                maxHeight: '$space$12',
                fs: '$xs',
                fontWeight: '$semibold',
                borderColor: following ? '$foreground' : '$primary',
                color: following ? '$foreground' : '$white',
              }}
              color='primary'
              bordered={following}
            >
              {following ? 'Unfollow' : 'Follow'}
            </Button>
          </Row>
        </Col>
      </Row>
      <Grid.Container className='user-twitter-card__username-container'>
        <Grid xs={12}>
          <Text
            className='user-twitter-card__text'
            size={14}
            css={{ mt: '$1' }}
            color='#888888'
          >
            Full-stack developer, @getnextui lover he/him{' '}
            <span
              role='img'
              aria-label='celebration emoji'
            >
              🎉
            </span>
          </Text>
        </Grid>
      </Grid.Container>

      <Grid.Container
        className='user-twitter-card__metrics-container'
        justify='flex-start'
        alignContent='center'
      >
        <Text
          className='user-twitter-card__text'
          size={14}
          color='#888888'
        >
          <Text
            b
            color='foreground'
            className='user-twitter-card__text'
            size={14}
            css={{ mr: '$1' }}
          >
            4
          </Text>
          Following
        </Text>
        <Spacer
          inline
          x={0.5}
        />
        <Text
          className='user-twitter-card__text'
          size={14}
          color='#888888'
        >
          <Text
            b
            color='foreground'
            className='user-twitter-card__text'
            size={14}
            css={{ mr: '$1' }}
          >
            97.1K
          </Text>
          Followers
        </Text>
      </Grid.Container>
    </Grid.Container>
  )
}

export default UserTwitterCard
