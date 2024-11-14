import "../../bootstrap";
import {container} from "tsyringe";
import {MainInteractor, MainInteractorInput} from "./MainInteractor";
import {DI} from "../../diTokens";
import {DateTime} from "luxon";
import assert = require("assert");

describe("MainInteractor", () => {
  describe("exec", () => {
    it("Should return normal value", async () => {
      /*
       * Prepare
       */
      process.env.ENV = "test";
      process.env.TZ = "UTC";

      const mockAsserts = [];
      {
        const timerMock = {
          now: jest.fn().mockReturnValue(DateTime.fromISO("2020-01-01T09:00:00+09:00")),
        };
        container.register(DI.Domain.Infrastructure.System.ITimer, { useValue: timerMock });
      }
      {
        const stdOutMock = {
          println: jest.fn(),
        };
        mockAsserts.push(() => {
          expect(stdOutMock.println.mock.calls.length).toBe(5);
          expect(stdOutMock.println.mock.calls[0][0]).toBe("Hello from ExampleService.");
          expect(stdOutMock.println.mock.calls[1][0]).toBe("Hello! test<test@test.test>");
          expect(stdOutMock.println.mock.calls[2][0]).toBe("ENV: test");
          expect(stdOutMock.println.mock.calls[3][0]).toBe("message: (message option didn't specified)");
          expect(stdOutMock.println.mock.calls[4][0]).toBe("Time: 2020-01-01T00:00:00.000Z");
        });
        container.register(DI.Domain.Infrastructure.System.IStdOut, { useValue: stdOutMock });
      }
      {
        const textReaderMock = {
          read: jest.fn().mockReturnValue("name: test\nemail: test@test.test"),
        };
        mockAsserts.push(() => {
          expect(textReaderMock.read.mock.calls.length).toBe(1);
        });
        container.register(DI.Domain.Infrastructure.System.ITextReader, { useValue: textReaderMock });
      }

      /*
       * Run
       */
      const input: MainInteractorInput = {
        message: "",
        config: "",
      };
      const interactor = container.resolve<MainInteractor>(DI.Application.UseCases.MainInteractor);
      interactor.exec(input);

      /*
       * Assert
       */
      assert.equal(true, true);
      mockAsserts.forEach((asserts) => asserts());
    });
  });
});