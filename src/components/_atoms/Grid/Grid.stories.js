import React from 'react';

import { Grid, Row, Col } from './index';
import Typography from '../typography/index';

// eslint-disable-next-line
export default {
    title: 'Atoms/Grid',
    component: Col
};

const GridTemplate = (args) => {
    return (
        <Grid {...args} >
            <Row responsiveDirection='medium' >
                <Col size='1'>
                    <Typography.Title100>Grid Column One.</Typography.Title100>
                    <Typography.Large>This column will be visible on every screen resolution.</Typography.Large>
                </Col>
                <Col size='1' collapse='small' >
                    <Typography.Title100>Grid Column Two.</Typography.Title100>
                    <Typography.Large>This column will collapse at 414px</Typography.Large>
                </Col>
            </Row>
        </Grid>
    );
};

export const GridControls = GridTemplate.bind({});
GridControls.args = {
    lockWidthAt : '1024'
};

const RowTemplate = (args) => {
    return (
        <Grid>
            <Row {...args}>
                <Col size='1'>
                    <Typography.Title100>Grid Column One.</Typography.Title100>
                    <Typography.Large>This column will be visible on every screen resolution.</Typography.Large>
                </Col>
                <Col size='1' collapse='small' >
                    <Typography.Title100>Grid Column Two.</Typography.Title100>
                    <Typography.Large>This column will collapse at 414px</Typography.Large>
                </Col>
            </Row>
        </Grid>
    );
};

export const RowControls = RowTemplate.bind({});
RowControls.args = {
    responsiveDirection : 'medium'
};

const ColTemplate = (args) => {
    return (
        <Grid>
            <Row responsiveDirection='medium' >
                <Col {...args} >
                    <Typography.Title100>Grid Column One.</Typography.Title100>
                    <Typography.Large>This column will be visible on every screen resolution.</Typography.Large>
                </Col>
                <Col size='1' collapse='small' >
                    <Typography.Title100>Grid Column Two.</Typography.Title100>
                    <Typography.Large>This column will collapse at 414px</Typography.Large>
                </Col>
            </Row>
        </Grid>
    );
};

export const ColControls = ColTemplate.bind({});
ColControls.args = {
    size: '1'
};

