import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NewsList from '../NewsList';

import {fetchMostShared} from '../../actions/news';

class MostSharedPage extends Component {

    static propTypes = {
        news: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.fetchMostShared();
    }

    render() {
        return (
            <div>
                <h2>Most Shared Page</h2>
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
    fetchMostShared
};

export default connect(mapStateToProps, mapDispatchToProps)(MostSharedPage);