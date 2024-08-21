import { IWaveButton } from "./WaveButton.type";

export default function WaveButton({...props}: IWaveButton) {
  return (
    <button className={`wave-button ${props.size}`}>
        {props.label}
    </button>
  )
}