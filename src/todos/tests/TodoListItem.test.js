import { expect } from 'chai';

import {
  getBorderStyleForDate,
  getButtonStyleForIsCompleted,
} from '../TodoListItem';

describe('getBorderStyleForDate', () => {
  it('returns none when the date is five days ago', () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 3);

    const expected = 'none';
    const actual = getBorderStyleForDate(recentDate, today);

    expect(actual).to.equal(expected);
  });

  it('returns border when the date is more than five days ago', () => {
    const today = Date.now();
    const oldDate = new Date(Date.now() - 86400000 * 8);

    const expected = '2px solid red';
    const actual = getBorderStyleForDate(oldDate, today);

    expect(actual).to.equal(expected);
  });
});

describe('getButtonStyleForIsCompleted', () => {
  it('returns none when the todo is completed', () => {
    const expected = 'none';
    const actual = getButtonStyleForIsCompleted(true);

    expect(actual).to.equal(expected);
  });
  it('returns background color when the todo is incompleted', () => {
    const expected = '#22ee22';
    const actual = getButtonStyleForIsCompleted(false);

    expect(actual).to.equal(expected);
  });
});
