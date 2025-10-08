import React, { Component } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
// import animation from '@/assets/animations/EnergyShares plant5.json'
const animation = 'animations/plant-animation.json'

interface LoadingState {
  visibility: boolean
}

export default class Loading extends Component<{}, LoadingState> {
  private static loading: Loading | null = null

  constructor(props: any) {
    super(props)
    this.state = {
      visibility: false,
    }
  }

  componentDidMount(): void {
    Loading.loading = this
  }

  componentWillUnmount(): void {
    Loading.loading = null
  }

  static setLoading(visibility: boolean) {
    Loading.loading?.setState({ visibility })
  }

  render() {
    if (!this.state.visibility) return null

    return (
      <div className="fixed inset-0 bg-[#000000CC] flex items-center justify-center z-50">
        <DotLottieReact
          src="/animation/plant-animation.json"
          loop={true}
          autoplay={true}
          style={{ width: 200, height: 200 }}
        />
      </div>
    )
  }
}
