import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NewsList from '../NewsList';

import {fetchMostEmailed} from '../../actions/news';

class MostEmailedPage extends Component {

    static propTypes = {
        news: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.fetchMostEmailed();
    }

    render() {
        return (
            <div>
                <h2>Most Emailed Page</h2>
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
    fetchMostEmailed
};

export default connect(mapStateToProps, mapDispatchToProps)(MostEmailedPage);