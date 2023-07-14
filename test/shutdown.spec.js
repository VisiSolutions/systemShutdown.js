import chai from 'chai';
import sinon from 'sinon';
import { exec } from 'child_process';
import { Shutdown } from '../index.js';

const assert = chai.assert;

describe('Shutdown', () => {
	describe('getCommandShutdown', () => {
		it('should return the correct command depending on the platform', () => {
			let shutdownInstance = new Shutdown();

			shutdownInstance.currentPlatform.platform = 'linux';
			assert.equal(shutdownInstance.getCommandShutdown(), "sudo shutdown -h now");

			shutdownInstance.currentPlatform.platform = 'win32';
			assert.equal(shutdownInstance.getCommandShutdown(), "shutdown -s -t 0");

			shutdownInstance.currentPlatform.platform = 'mac';
			assert.throws(shutdownInstance.getCommandShutdown, Error, "Platform not supported");
		});
	});

	describe('initShutdown', () => {

		it('should execute shutdown command and resolve promise when it is executed successfully', async () => {
			const execStub = sinon.stub(exec, 'exec').callsFake((command, callback) => callback(null));

			const shutdownInstance = new Shutdown();
			shutdownInstance.currentPlatform.platform = 'linux';

			try {
				await shutdownInstance.initShutdown();
				assert.isTrue(execStub.calledOnce);
			} catch (err) {
				assert.fail(err);
			} finally {
				execStub.restore();
			}
		});

		it('should reject promise when error occurs while executing shutdown command', async () => {
			const execStub = sinon.stub(exec, 'exec').callsFake((command, callback) => callback(new Error('error')));

			const shutdownInstance = new Shutdown();
			shutdownInstance.currentPlatform.platform = 'linux';

			try {
				await shutdownInstance.initShutdown();
				assert.fail('Promise was unexpectedly fulfilled');
			} catch (err) {
				assert.isTrue(execStub.calledOnce);
				assert.equal(err.message, 'error');
			} finally {
				execStub.restore();
			}
		});
	});
});