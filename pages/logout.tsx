import classNames from 'classnames'
import { url } from 'inspector'
import { NextPage } from 'next'
import { useIntl } from 'react-intl'
import { Carousel } from 'react-responsive-carousel'
import { Header } from '../components/header/Header'
import { FollowButtons } from '../components/home/FollowButtons'
import { PageHead } from '../components/PageHead'
import { Footer } from '../components/wizard/Footer'
import range from '../utils/range'
import style from './logout.module.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const screenshots = [
  'scr-1.png',
  'scr-2.png',
  'scr-3.png',
  'scr-4.png',
  'scr-5.png',
  'scr-6.png',
  'video-im.png',
]

const Logout: NextPage = () => {
  return (
    <div className={style.container}>
      <Header size="s" />
      <div className={style.content}>
        <div className={style.parrot} />
        <div className={style.textContainer}>
          <div className={style.title}>
            Continue studying with mobile application
          </div>
          <div className={style.subTitle}>
            Make language learning even more joyful with our mobile apps!
          </div>
          <div className={style.appLinksContainer}>
            <div>
              <div className={classNames(style.apple, style.market)} />
              <div className={style.stars}>
                {range(5).map(i => (
                  <div key={i} className={style.star} />
                ))}
              </div>
            </div>
            <div>
              <div className={classNames(style.google, style.market)} />
              <div className={style.stars}>
                {range(5).map(i => (
                  <div key={i} className={style.star} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={style.phoneContainer}>
          <div className={style.phone}>
            <Carousel
              showStatus={false}
              autoPlay
              infiniteLoop
              showThumbs={false}
              showIndicators={false}
            >
              {screenshots.map(pic => (
                <div
                  key={pic}
                  className={style.screen}
                  style={{
                    backgroundImage: `url(/assets/images/logout/${pic})`,
                  }}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <FollowButtons />
      <Footer />
    </div>
  )
}

export default Logout