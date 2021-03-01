import React, { Component } from 'react'
import styles from './Searchbar.module.css'

export default class Searchbar extends Component {
    state = {
        query: ''
    }

    handleChangeQuery = ({ currentTarget }) => {
        this.setState({ query: currentTarget.value });
    };

    handelSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' })
    }

    render() {
        const { query } = this.state;
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handelSubmit}>
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={styles.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name='query'
                        value={query}
                        onChange={this.handleChangeQuery}
                    />
                </form>
            </header >
        )
    }
}
