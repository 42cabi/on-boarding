package com.example.bot;

import com.example.bot.util.FunctionOutputTester;
import com.example.bot.util.OutputTest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class BotTests extends OutputTest {

	private final static String 홈런볼 = "<홈런볼>";
	private final static String 새우깡 = "<새우깡>";
	private final static String 파타타스프리타스 = "<파타타스프리타스>";
	private final static String 데자와 = "<데자와>";
	private final static String 이랑 = "이랑";

	private JiwonBehavior bot;
	private FunctionOutputTester<String> orderTester;

	@BeforeEach
	public void setUp() {
		super.setUp();
		bot = new BotImpl();
		orderTester = new FunctionOutputTester<>(bot::takeOrder, outputAssertions);
	}

	@Test
	void 담기_주문() {
		orderTester.when(orderProduct(홈런볼)).then(yes(3000));
	}

	@Test
	void 동시에_담기_주문() {
		orderTester.when(orderBiProduct(홈런볼, 이랑, 새우깡)).then(yes(6000));
	}

	@Test
	void 빼기_주문() {
		orderTester.when(removeProduct(홈런볼)).then(tellNotOrdered(홈런볼));
		orderTester.when(orderProduct(홈런볼)).then(yes(3000));
		orderTester.when(removeProduct(홈런볼)).then(yes());
	}

	@Test
	void 개수_세기() {
		orderTester.when(orderProduct(홈런볼)).then(yes(3000));
		orderTester.when(orderProduct(홈런볼)).then(yes(3000));
		orderTester.when(askCount(홈런볼)).then(tellCount(홈런볼, 2));
		orderTester.when(askCount(파타타스프리타스)).then(tellNotOrdered(파타타스프리타스));
	}

	@Test
	void 시켰는지() {
		orderTester.when(orderProduct(홈런볼)).then(yes(3000));
		orderTester.when(orderProduct(홈런볼)).then(yes(3000));
		orderTester.when(askOrdered(홈런볼)).then(tellOrdered(홈런볼));
		orderTester.when(removeProduct(홈런볼)).then(yes());
		orderTester.when(askOrdered(홈런볼)).then(tellNotOrdered(홈런볼));
	}

	@Test
	void 주문_완료() {
		orderTester.when(orderProduct(홈런볼)).then(yes(3000));
		orderTester.when(orderProduct(홈런볼)).then(yes(3000));
		orderTester.when(orderProduct(새우깡)).then(yes(3000));
		orderTester.when(orderProduct(파타타스프리타스)).then(yes(8000));
		orderTester.when(askHowMuch()).then(tellResult(17000));
	}

	@Test
	void 종합_테스트() {
		orderTester.when(orderProduct(홈런볼)).then(yes(3000));
		orderTester.when(orderBiProduct(홈런볼, 이랑, 새우깡)).then(yes(6000));
		orderTester.when(askCount(홈런볼)).then(tellCount(홈런볼, 2));
		orderTester.when(askCount(파타타스프리타스)).then(tellNotOrdered(파타타스프리타스));
		orderTester.when(removeProduct(데자와)).then(tellNotOrdered(데자와));
		orderTester.when(removeProduct(파타타스프리타스)).then(tellNotOrdered(파타타스프리타스));
		orderTester.when(askHowMuch()).then(tellResult(9000));
	}

	private String askHowMuch() {
		return "얼마야?";
	}

	private String orderProduct(String productName) {
		return productName;
	}

	private String orderBiProduct(String product1, String junction, String product2) {
		return product1 + junction + product2;
	}

	private String askOrdered(String productName) {
		return productName + "시켰나?";
	}

	private String askCount(String productName) {
		return productName + "몇 개야?";
	}

	private String removeProduct(String productName) {
		return productName + "빼";
	}

	private String yes() {
		return "네";
	}

	private String yes(int amount) {
		return "네 " + amount + "원이요";
	}

	private String tellCount(String product, int amount) {
		return product + amount + "개요";
	}

	private String tellNotOrdered(String product) {
		return product + "안 시키셨어요";
	}

	private String tellOrdered(String product) {
		return product + "시키셨어요";
	}

	private String tellResult(int amount) {
		return "총 " + amount + "원 입니다";
	}
}
