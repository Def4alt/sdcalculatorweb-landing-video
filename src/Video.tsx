import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="SDCalculatorWeb"
				component={MyComposition}
				durationInFrames={3600}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
