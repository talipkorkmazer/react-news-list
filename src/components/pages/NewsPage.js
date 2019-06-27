import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NewsList from '../NewsList';

import {fetchHome} from '../../actions/news';

class NewsPage extends Component {

    static propTypes = {
        news: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.fetchHome();
    }

    render() {
        return (
            <div>
                <h2>Home Page</h2>
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
    fetchHome
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);