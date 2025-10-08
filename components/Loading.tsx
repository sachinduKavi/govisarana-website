import React, { Component } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
// import animation from '@/assets/animations/EnergyShares plant5.json'
const animation = 'animations/plant-animation.json'

interface LoadingState {
  visibility: boolean
  text: string
}

export default class Loading extends Component<{}, LoadingState> {
  private static loading: Loading | null = null
  private static currentTimer: NodeJS.Timeout | null = null
  constructor(props: any) {
    super(props)
    this.state = {
      visibility: false,
      text: 'Loading',
    }
  }

  updateText() {
    console.log('Updating loading text')
    if (Loading.loading) {
      if (this.state.text.length >= 25) {
        this.setState({ text: ' Loading ' })
      } else {
        this.setState((pre) => ({
          text: pre.text
            .padStart(pre.text.length + 1, '.')
            .padEnd(pre.text.length + 2, '.'),
        }))
      }
    }
  }

  componentDidMount(): void {
    Loading.loading = this
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<LoadingState>,
    snapshot?: any
  ): void {
    if (
      prevState.visibility !== this.state.visibility &&
      !this.state.visibility
    ) {
      this.setState({ text: 'Loading' })
      clearInterval(Loading.currentTimer!)
      Loading.currentTimer = null
    } else if (
      prevState.visibility !== this.state.visibility &&
      this.state.visibility
    ) {
      Loading.currentTimer = setInterval(() => this.updateText(), 200)
    }
  }

  componentWillUnmount(): void {
    Loading.loading = null
    if (Loading.currentTimer) {
      clearInterval(Loading.currentTimer)
      Loading.currentTimer = null
    }
  }

  static setLoading(visibility: boolean) {
    Loading.loading?.setState({ visibility })
  }

  render() {
    if (!this.state.visibility) return null

    return (
      <div className="fixed flex flex-col inset-0 bg-[#000000CC] flex items-center justify-center z-50">
        <DotLottieReact
          src="/animation/plant-animation.json"
          loop={true}
          autoplay={true}
          style={{ width: 200, height: 200 }}
        />
        <h2 className="text-white font-bold m-4 tracking-[3px]">
          {this.state.text}
        </h2>
      </div>
    )
  }
}
