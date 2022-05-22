interface HelloWorld {
    programmingLanguage: string;
}
describe('Just an example', () => {
    it('is not going to work', () => {
        const helloWorld: HelloWorld = {
            programmingLanguage: 'javascript'
        }
        expect(helloWorld.programmingLanguage).toBe('javascript');
    });
});
