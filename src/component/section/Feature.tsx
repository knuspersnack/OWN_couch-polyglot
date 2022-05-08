import React from 'react'
import FeatureBox from '../UI/FeatureBox'
import style from '../../style/section/Feature.module.scss';

type Props = {}

const FeatureSection = (props: Props) => {
  return (
    <section className={style.sectionFeatures}>
          <div className={'grid grid-cols-4 gap-12 px-12 h-full'}>
              <div>
                <FeatureBox
                  heading={'Explore the world'}
                  text={
                    'Cillum amet incididunt ut magna nostrud occaecat cillum.'
                  }
                  iconClass={'icon-basic-world'}
                />
              </div>
              <div>
                <FeatureBox
                  heading={'Meet nature'}
                  text={
                    'Minim proident esse laboris ea aute nulla reprehenderit anim minim eiusmod reprehenderit laborum in amet.'
                  }
                  iconClass={'icon-basic-compass'}
                />
              </div>
              <div>
                <FeatureBox
                  heading={'Find your way'}
                  text={
                    'Magna commodo dolore cupidatat culpa aliquip veniam incididunt enim voluptate.'
                  }
                  iconClass={'icon-basic-map'}
                />
              </div>
              <div>
                <FeatureBox
                  heading={'Live a healthier life'}
                  text={
                    'Sit amet quis non quis sint non pariatur voluptate laborum nisi consequat nostrud id.'
                  }
                  iconClass={'icon-basic-heart'}
                />
              </div>
          </div>
        </section>
  )
}

export default FeatureSection