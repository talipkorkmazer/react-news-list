import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NewsList from '../NewsList';

import {fetchMostViewed} from '../../actions/news';

class NewsPage extends Component {

    static propTypes = {
        news: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.fetchMostViewed();
    }

    render() {
        return (
            <div>
                <h2>News Page</h2>
                <NewsList news={this.props.news}></NewsList>
            </div>
        );
    }
}

const mapStateToProps = ({news}) => {
    return {
        news
    }
};

const mapDispatchToProps = {
    fetchMostViewed
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);