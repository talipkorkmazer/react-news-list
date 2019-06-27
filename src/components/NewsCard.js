import React from 'react'
import {Card, Icon, Grid} from 'semantic-ui-react'

const styles = {
    extraSection: {
        float: 'right'
    }
};

const NewsCard = (state) => (
    <Grid.Column>
        <a href={state.url} target="_blank">
            <Card
                image={state.image}
                header={state.title}
                meta={state.type}
                description={state.abstract}
                extra={
                        <span>
                            <Icon name='user'/>
                                {state.views}
                                <span style={styles.extraSection}>{state.section}</span>
                        </span>

                    }
            />
        </a>
    </Grid.Column>
);



export default NewsCard;
