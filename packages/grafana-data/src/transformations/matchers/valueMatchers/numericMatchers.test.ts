import { toDataFrame } from '../../../dataframe';
import { DataFrame } from '../../../types/dataFrame';
import { getValueMatcher } from '../../matchers';
import { ValueMatcherID } from '../ids';

describe('value null matcher', () => {
  const data: DataFrame[] = [
    toDataFrame({
      fields: [
        {
          name: 'temp',
          values: [23, 11, 10],
        },
      ],
    }),
  ];

  const matcher = getValueMatcher({
    id: ValueMatcherID.greater,
    options: {
      value: 11,
    },
  });

  it('should match values greater than 11', () => {
    const frame = data[0];
    const field = frame.fields[0];
    const valueIndex = 0;

    expect(matcher(valueIndex, field, frame, data)).toBeTruthy();
  });

  it('should not match values equlas to 11', () => {
    const frame = data[0];
    const field = frame.fields[0];
    const valueIndex = 1;

    expect(matcher(valueIndex, field, frame, data)).toBeFalsy();
  });

  it('should not match values lower than 11', () => {
    const frame = data[0];
    const field = frame.fields[0];
    const valueIndex = 2;

    expect(matcher(valueIndex, field, frame, data)).toBeFalsy();
  });
});
