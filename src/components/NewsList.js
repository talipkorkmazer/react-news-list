import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';
import {Grid} from "semantic-ui-react";
import {CircleLoader} from 'react-spinners';


const NewsList = ({news}) => {
    const newsList = (
        <div>
            <CircleLoader
                size={40}
                color={'#35bdb2'}
                loading={news.fetching}
            />
            {
                news.error.length > 0
                    ?
                    <h3> Error retrieving data! </h3>
                    :
                    <Grid stackable columns={4}>
                        {
                            news.news.map(item => <NewsCard key={item.asset_id} title={item.title}
                                                            image={item.media[0]['media-metadata'][2].url}
                                                            views={typeof item.views === "undefined" ? item.total_shares : item.views}
                                                            url={item.url}
                                                            type={typeof item.type === "undefined" ? "" : item.type}
                                                            section={item.section}
                                                            abstract={item.abstract}/>)
                        }
                    </Grid>

            }

        </div>
    );

    const emptyMessage = (
        <p>There are no news yet.</p>
    );
    return (
        <div>
            {news.news.length === 0 && news.fetching === false ? emptyMessage : newsList}
        </div>
    )
};

NewsList.propTypes = {
    news: PropTypes.shape({
        news: PropTypes.array.isRequired
    }).isRequired
};

export default NewsList;