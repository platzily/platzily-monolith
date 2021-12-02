const Faker = require('faker');
const validators = require('./validators');

describe('Validators', () => {
  describe('isValidUserId', () => {
    it('Given a integer greater than 0, then the function must return true ', () => {
      // Arrange
      const userId = Faker.random.number();
      // Act
      const isValid = validators.isValidUserId(userId);
      // Assert
      expect(isValid).toBe(true);
    });
    it('Given a integer less or equal to 0, then the function must return false', () => {
      // Arrange
      const lessOrEqualToZeroIntegers = [-1, 0];
      lessOrEqualToZeroIntegers.forEach((value) => {
        // Act
        const isValid = validators.isValidUserId(value);
        // Assert
        expect(isValid).toBe(false);
      });
    });
    it('Given a non integer, then the function must return false', () => {
      // Arrange
      const edgeCases = ['', null, undefined, {}, [], Faker.random.word(), { element: Faker.random.objectElement() }, Faker.random.arrayElements()];
      edgeCases.forEach((value) => {
        // Act
        const isValid = validators.isValidUserId(value);
        // Assert
        expect(isValid).toBe(false);
      });
    });
  });
  describe('isValidLinkId', () => {
    it('Given a link id valid for object_id pattern, then the function must return true', () => {
      // Arrange
      const linkId = '507f191e810c19729de860ea';
      // Act
      const isValid = validators.isValidLinkId(linkId);
      // Assert
      expect(isValid).toBe(true);
    });
    it('Given a link id not valid for object_id pattern, then the function must return false', () => {
      // Arrange
      const linkId = '507g191h810i19729jk860lm';
      // Act
      const isValid = validators.isValidLinkId(linkId);
      // Assert
      expect(isValid).toBe(false);
    });
    it('Given a non string, then the function must return false', () => {
      // Arrange
      // eslint-disable-next-line max-len
      const edgeCases = [0, null, undefined, {}, [], Faker.random.number(), { element: Faker.random.objectElement() }, Faker.random.arrayElements()];
      edgeCases.forEach((value) => {
        // Act
        const isValid = validators.isValidLinkId(value);
        // Assert
        expect(isValid).toBe(false);
      });
    });
  });
  describe('isValidMetric', () => {
    it('Given a object valid for metric, then the function must return true', () => {
      // Arrange
      const metric = { name: 'clicks', description: 'clicks by link' };
      // Act
      const isValid = validators.isValidMetric(metric);
      // Assert
      expect(isValid).toBe(true);
    });
    it('Given a object invalid for metric, then the function must return false', () => {
      // Arrange
      const metric = { name1: 'name1', description1: 'description1' };
      // Act
      const isValid = validators.isValidMetric(metric);
      // Assert
      expect(isValid).toBe(false);
    });
    it('Given a object valid for metric with empty value(s), then the function must return false', () => {
      // Arrange
      const metric = { name: '', description: '' };
      // Act
      const isValid = validators.isValidMetric(metric);
      // Assert
      expect(isValid).toBe(false);
    });

    it('Given a non object, then the function must return false', () => {
      // Arrange
      // eslint-disable-next-line max-len
      const edgeCases = [0, '', null, undefined, {}, [], Faker.random.number(), Faker.random.word(), { element: Faker.random.objectElement() }, Faker.random.arrayElements()];
      edgeCases.forEach((value) => {
        // Act
        const isValid = validators.isValidLinkId(value);
        // Assert
        expect(isValid).toBe(false);
      });
    });
  });
  describe('isValidContext', () => {
    it('Given a string valid for context, then the function must return true', () => {
      // Arrange
      const context = 'link';
      // Act
      const isValid = validators.isValidContext(context);
      // Assert
      expect(isValid).toBe(true);
    });
    it('Given a string empty, then the function must return false', () => {
      // Arrange
      const context = '';
      // Act
      const isValid = validators.isValidContext(context);
      // Assert
      expect(isValid).toBe(false);
    });
    it('Given a non string, then the function must return false', () => {
      // Arrange
      // eslint-disable-next-line max-len
      const edgeCases = [0, null, undefined, {}, [], { element: Faker.random.objectElement() }, Faker.random.arrayElements()];
      edgeCases.forEach((value) => {
        // Act
        const isValid = validators.isValidContext(value);
        // Assert
        expect(isValid).toBe(false);
      });
    });
  });
});
