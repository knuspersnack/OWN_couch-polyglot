import React from 'react'
import FeatureBox from '../UI/FeatureBox'
import style from '../../style/section/Feature.module.scss';

type Props = {}

const FeatureSection = (props: Props) => {
  return (
    <section className={style.sectionFeatures}>
          <div className={'grid-container'}>
            <div className={'row'}>
              <div className={'col25'}>
                <FeatureBox
                  heading={'Explore the world'}
                  text={
                    'Cillum amet incididunt ut magna nostrud occaecat cillum.'
                  }
                  iconClass={'icon-basic-world'}
                />
              </div>
              <div className={'col25'}>
                <FeatureBox
                  heading={'Meet nature'}
                  text={
                    'Minim proident esse laboris ea aute nulla reprehenderit anim minim eiusmod reprehenderit laborum in amet.'
                  }
                  iconClass={'icon-basic-compass'}
                />
              </div>
              <div className={'col25'}>
                <FeatureBox
                  heading={'Find your way'}
                  text={
                    'Magna commodo dolore cupidatat culpa aliquip veniam incididunt enim voluptate.'
                  }
                  iconClass={'icon-basic-map'}
                />
              </div>
              <div className={'col25'}>
                <FeatureBox
                  heading={'Live a healthier life'}
                  text={
                    'Sit amet quis non quis sint non pariatur voluptate laborum nisi consequat nostrud id.'
                  }
                  iconClass={'icon-basic-heart'}
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default FeatureSection