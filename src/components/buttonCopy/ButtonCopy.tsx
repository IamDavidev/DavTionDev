import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toastCopyToClipboard } from '../../lib/helpers/Toast.functions';
import { CopyIcon } from '../icons/Copy.icon';

function ButtonCopy({ textCopy }: { textCopy: string }): JSX.Element {
	return (
		<>
			<CopyToClipboard text={textCopy}>
				<button onClick={toastCopyToClipboard}>
					<CopyIcon width={15} color='#d63691' />
				</button>
			</CopyToClipboard>
		</>
	);
}

export default ButtonCopy;
