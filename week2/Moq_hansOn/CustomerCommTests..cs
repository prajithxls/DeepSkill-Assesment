using NUnit.Framework;
using Moq;
using CustomerCommLib;

namespace CustomerComm.Tests
{
    [TestFixture]
    public class CustomerCommTests
    {
        [Test]
        public void SendMailToCustomer_ShouldReturnTrue()
        {
            var mockMailSender = new Mock<IMailSender>();
            mockMailSender.Setup(m => m.SendMail(It.IsAny<string>(), It.IsAny<string>())).Returns(true);

            var obj = new CustomerCommunication(mockMailSender.Object);

            var result = obj.SendMailToCustomer();

            Assert.That(result, Is.True);
        }
    }
}
