import { moviesApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async getNowPlaying() {
    const {
      data: { results: nowPlaying },
    } = await moviesApi.nowPlaying();
    return nowPlaying;
  }

  async getUpcoming() {
    const {
      data: { results: upcoming },
    } = await moviesApi.upcoming();
    return upcoming;
  }

  async getPopular() {
    const {
      data: { results: popular },
    } = await moviesApi.popular();
    return popular;
  }

  async componentDidMount() {
    try {
      this.setState({
        nowPlaying: await this.getNowPlaying(),
        upcoming: await this.getUpcoming(),
        popular: await this.getPopular(),
      });
    } catch {
      this.setState({
        error: "Can't find movie information",
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
