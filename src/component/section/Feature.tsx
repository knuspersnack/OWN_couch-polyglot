import React from 'react'
import FeatureBox from '../UI/FeatureBox'
import style from '../../style/section/Feature.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

type Props = {}

const FeatureSection = (props: Props) => {
  return (
    <section className={style.sectionFeatures}>
          <Container>
            <Row>
              <Col>
                <FeatureBox
                  heading={'Explore the world'}
                  text={
                    'Cillum amet incididunt ut magna nostrud occaecat cillum.'
                  }
                  iconClass={'icon-basic-world'}
                />
              </Col>
              <Col>
                <FeatureBox
                  heading={'Meet nature'}
                  text={
                    'Minim proident esse laboris ea aute nulla reprehenderit anim minim eiusmod reprehenderit laborum in amet.'
                  }
                  iconClass={'icon-basic-compass'}
                />
              </Col>
              <Col>
                <FeatureBox
                  heading={'Find your way'}
                  text={
                    'Magna commodo dolore cupidatat culpa aliquip veniam incididunt enim voluptate.'
                  }
                  iconClass={'icon-basic-map'}
                />
              </Col>
              <Col>
                <FeatureBox
                  heading={'Live a healthier life'}
                  text={
                    'Sit amet quis non quis sint non pariatur voluptate laborum nisi consequat nostrud id.'
                  }
                  iconClass={'icon-basic-heart'}
                />
              </Col>
            </Row>
          </Container>
        </section>
  )
}

export default FeatureSection