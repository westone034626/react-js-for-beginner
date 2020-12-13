import { tvApi } from "api";
import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  async getTopRated() {
    const {
      data: { results: topRated },
    } = await tvApi.topRated();
    return topRated;
  }

  async getPopular() {
    const {
      data: { results: popular },
    } = await tvApi.popular();
    return popular;
  }

  async getAiringToday() {
    const {
      data: { results: airingToday },
    } = await tvApi.airingToday();
    return airingToday;
  }

  async componentDidMount() {
    try {
      this.setState({
        topRated: await this.getTopRated(),
        popular: await this.getPopular(),
        airingToday: await this.getAiringToday(),
      });
    } catch {
      this.setState({ error: "Cant find TV information" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
