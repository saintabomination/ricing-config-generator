import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { x } from '@xstyled/styled-components';

import type { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

library.add(fas);
library.add(fab);

type Props = {
  name: IconName;
  type: IconPrefix;
  size?: number;
};

const Icon = ({ name, type, size = 1.0 }: Props): JSX.Element =>
  (
    <x.div
      fontSize={`${size}em`}
    >
      <FontAwesomeIcon icon={[type, name]} />
    </x.div>
  );

export default Icon;
