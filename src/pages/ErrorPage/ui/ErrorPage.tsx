import cls from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  return (
    <div className={cls.ErrorPage}>
      <h1>Упс... Что-то пошло не так :(</h1>
			<h1>Попробуйте перезагрузить страницу</h1>
    </div>
  );
};
